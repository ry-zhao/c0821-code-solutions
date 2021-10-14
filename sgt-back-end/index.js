const express = require('express');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const ex = express();

ex.use(express.json());

ex.get('/api/grades', (req, res, next) => {
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

ex.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
      where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}.`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

ex.post('/api/grades', (req, res, next) => {
  if (!req.body.name || !req.body.course) {
    res.status(400).json({
      error: 'Invalid "name" or "course".'
    });
    return;
  }
  const score = Number(req.body.score);
  if (!Number.isInteger(score)) {
    res.status(400).json({
      error: '"score" must be an integer.'
    });
    return;
  }
  if (score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" range must be between 0 and 100.'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
  `;
  const params = [req.body.name, req.body.course, score];
  db.query(sql, params)
    .then(result => {
      res.status(201).send();
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

ex.put('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
    return;
  }
  let score;
  if (req.body.score !== undefined) {
    score = Number(req.body.score);
    if (!Number.isInteger(score)) {
      res.status(400).json({
        error: '"score" must be an integer.'
      });
      return;
    }
    if (score < 0 || score > 100) {
      res.status(400).json({
        error: '"score" range must be between 0 and 100.'
      });
      return;
    }
  }
  const params = [];
  params.push(gradeId);
  let paramNum = 2;
  let setStatement = 'set ';
  if (req.body.name) {
    setStatement += `"name" = $${paramNum++}, `;
    params.push(req.body.name);
  } else {
    setStatement += '"name" = "name", ';
  }
  if (req.body.course) {
    setStatement += `"course" = $${paramNum++}, `;
    params.push(req.body.course);
  } else {
    setStatement += '"course" = "course", ';
  }
  if (score !== undefined) {
    setStatement += `"score" = $${paramNum++}`;
    params.push(score);
  } else {
    setStatement += '"score" = "score"';
  }
  const sql = `
    update "grades"
      ${setStatement}
      where "gradeId" = $1
    returning *
  `;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}.`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

ex.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer.'
    });
    return;
  }
  const sql = `
    delete from "grades"
    where "gradeId" = $1
    returning *
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const deleted = result.rows[0];
      if (!deleted) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}.`
        });
      } else {
        res.status(204).send();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

ex.listen(3000, () => {
  console.log('Now listening on PORT 3000...');
});
