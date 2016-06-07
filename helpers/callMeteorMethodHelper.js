/**
 * Created by mk on 07.06.16.
 */


export function callMeteorMethod(methodName, ...args) {
      return new Promise((resolve, reject) => {
            Meteor.call(methodName, ...args, (error, result) => {
                  if (error) reject(error)
                  else resolve(result)
            })
      })

}