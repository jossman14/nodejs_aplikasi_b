const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: '192.168.43.30',
  database: 'hospital',
  password: 'postgres',
  port: 5432,
})
pool.on('connect', () => {
  console.log('Sukses terhubung')
});


const uploadedPatient = (req, res) => {

  pool.query('SELECT * FROM patient ORDER BY patient_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(results.rows);
  })


}

const createPatient = (request, response) => {
  const { patient_name, gender,address,telp } = request.body;

  pool.query('INSERT INTO patient (patient_name, gender, address, telp) VALUES ($1, $2, $3, $4)', [patient_name, gender, address, telp], (error, result) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Patient added Succesfully`)
  })
}

const updatePatient = (request, response) => {
  const patient_id = parseInt(request.params.id)
  const { patient_name, gender,address,telp } = request.body

  pool.query(
    'UPDATE patient SET patient_name = $1, gender = $2, address = $3, telp = $4 WHERE patient_id = $5',
    [patient_name, gender, address, telp, patient_id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Patient modified with ID: ${patient_id}`)
    }
  )
}

module.exports = {
  createPatient,
  updatePatient,
  uploadedPatient,
}