module.exports = Delete;

function Delete(ID,right){
    var config = this.config;

    //check whether right string is legal
    if(right != 'publish'
        && right != 'answer'
        && right != 'view'
        && right != 'view_personal_infromation'
    ){
        return;
    }


    var sql_string = 'SELECT Rights FROM RightsTable WHERE ID=' + ID;

    config.modules['saferman'].sql(sql_string,function(results){
        if(results[0] != undefined){
            var new_rights = results[0].Rights.replace('|' + right,'');
            sql_string = "UPDATE RightsTable SET Rights='" + new_rights +  "' WHERE ID=" + ID;

            config.modules['saferman'].sql(sql_string);
        }
    });
}