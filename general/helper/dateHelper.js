/**
 * Created by martin on 31.03.2016.
 */


export function currentDate(){
            return moment().toDate();
      }
      
export function dateDMy(date, asDate) {

      if (typeof(date) === 'string')
      {
            console.log('Date = string')
      }

            if (asDate) {
                  if (typeof(date) === 'string')
                  {
                        return moment(Date(date)).format("DD.MM.YYYY")

                  }

                  return moment(date).format("DD.MM.YYYY");
            }
            return moment(date,"DD.MM.YYYY").format("DD.MM.YYYY")
}

