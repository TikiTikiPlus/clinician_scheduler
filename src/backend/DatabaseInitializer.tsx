const oracledb = require('oracledb');
//lets do the creation of database. 
async function runApp()
{
  let connection;
  try {
    connection = await oracledb.getConnection({ user: "C##RALPH", password: "ralph", connectionString: "localhost:1521/orcl" });
    console.log("Successfully connected to Oracle Database");
  
    // Create a table
    await connection.execute(`begin execute immediate 'drop table Clinician'; exception when others then if sqlcode <> -942 then raise; end if; end;`);
    await connection.execute(`create table Clinician ( clinician_id number generated always as identity, 
    last_name varchar2(100),
    first_name varchar2(100),
    skillsets varchar2(4000),
    primary key (clinician_id))`);
    console.log('table "Clinician" created');

    await connection.execute(`begin execute immediate 'drop table Patients'; exception when others then if sqlcode <> -942 then raise; end if; end;`);
    await connection.execute(`create table Patients ( patient_id number generated always as identity, 
        last_name varchar2(100),
        first_name varchar2(100),
        diagnosis varchar2 (500),
        medication varchar2(500),
        admission_date DATE,
        planned_discharge DATE,
        length_of_stay int, 
        length_of_admission int, 
        needs varchar2(4000),
        clinician_assigned int, 
        FOREIGN KEY (clinician_assigned) REFERENCES Clinician(clinician_id),
        primary key (patient_id))`);
    console.log('table "Patients" created')

    await connection.execute(`begin execute immediate 'drop table Equipment'; exception when others then if sqlcode <> -942 then raise; end if; end;`);
    await connection.execute(`create table Equipment ( equipment_id number generated always as identity, 
        equipment_name varchar2(100),
        location varchar2(200),
        car_number varchar2(100),
        primary key (id))`);
    console.log('table "Equipments" created')
    
    await connection.execute(`begin execute immediate 'drop table Equipment'; exception when others then if sqlcode <> -942 then raise; end if; end;`);
    await connection.execute(`create table Non-Clinician ( non-clinician_id number generated always as identity, 
        username varchar2(100),
        password varchar2(500),
        primary key (non-clinician_id))`);
    console.log('table "Equipments" created')
    await connection.execute;

//     // Insert some data
//     const sql = `insert into todoitem (description, done) values(:1, :2)`;
//     console.log(sql);
//     const rows = [ ["Task 1", 0 ], ["Task 2", 0 ], ["Task 3", 1 ], ["Task 4", 0 ], ["Task 5", 1 ] ];
//     let result = await connection.executeMany(sql, rows);
//     console.log(result.rowsAffected, "Rows Inserted");
//     connection.commit();
//   
    // Now query the rows back
//     result = await connection.execute( `select description, done from todoitem`, [], { resultSet: true, outFormat: oracledb.OUT_FORMAT_OBJECT });
//     const rs = result.resultSet; let row;
//     while ((row = await rs.getRow())) {
//       if (row.DONE)
//         console.log(row.DESCRIPTION, "is done");
//       else
//         console.log(row.DESCRIPTION, "is NOT done");
//     }
//     await rs.close();
  } catch (err) {
    console.error(err);
  } finally {
    if (connection)
    {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }

}
runApp();