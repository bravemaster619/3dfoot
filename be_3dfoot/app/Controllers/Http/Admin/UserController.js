'use strict'

const User = use('App/Models/User')
const excel = require('node-excel-export');

class UserController {

  async export2Excel({request, response}) {
    const users = await User.all()
    let userData = [];
    users.rows.forEach((user) => {
      userData.push(user.$attributes)
    })
    // You can define styles as json object
    const styles = {
      headerLight: {
        fill: {
          fgColor: {
            rgb: 'E0E0E0E0'
          }
        },
        font: {
          color: {
            rgb: '00000000'
          },
          sz: 12,
          bold: false,
          underline: false
        }
      },
    };

    //Here you specify the export structure
    const specification = {
      id: {
        displayName: 'ID',
        headerStyle: styles.headerLight,
        width: 80
      },
      email: {
        displayName: 'Email',
        headerStyle: styles.headerLight,
        width: 240
      },
      created_at: {
        displayName: 'Created At',
        headerStyle: styles.headerLight,
        width: 120
      },
      updated_at: {
        displayName: 'Updated At',
        headerStyle: styles.headerLight,
        width: 120
      }
    }

    const report = excel.buildExport(
      [ // <- Notice that this is an array. Pass multiple sheets to create multi sheet report
        {
          name: 'Users', // <- Specify sheet name (optional)
          specification, // <- Report specification
          data: userData // <-- Report data
        }
      ]
    );
    response.header('Content-Type', 'application/vnd.openxmlformats')
    response.header('Content-Disposition', 'attachment;filename=' + 'Users.xlsx')
    return response.send(report);
  }
}

module.exports = UserController
