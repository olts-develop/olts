/**
 * Created by martin on 28.01.2016.
 */

export function testForEmailAdress(email){

    let isMail = false;

    try {
        if (!email){
            throw "Parmeter email is empty","A user or email is mantatory"
        }

        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        isMail = re.test(email);
    }
    catch(err) {
        console.log(err)
    }
    finally {
        return isMail
    }

}