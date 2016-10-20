/**
 * Created by martin on 14.04.2016.
 */
import React from 'react';

export function getTableHeader(objProps){
      
      let TabelHeader = React.createClass({
            
            render: function(){
                  return (

                        objProps.map(objProp => (
                              <th> Object.getOwnPropertyNames(objProp) </th>
                              
                  ))
                  
                  )
            }
            
      })
      

}

