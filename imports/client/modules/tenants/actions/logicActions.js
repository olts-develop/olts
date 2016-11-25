/**
 * Created by martin on 21.11.2016.
 */

export default {



      getTenant({},query, variables){
            return (dispatch,getState) => {

                  query(variables).then((result)=>{
                        if(result.data){
                              return dispatch ({
                                    type: "TENANT_SELECT",
                                    tenant: result.data.getTenant
                              })
                        }
                  })
            }

            console.log('addTenant' + 'Code: ' + variables.code + 'id: ' + variables.id)
      },

      handleChange({dispatch}, tenant) {
            console.log('handleChange: ' + tenant.code + '    ' + tenant.description)

      }
}