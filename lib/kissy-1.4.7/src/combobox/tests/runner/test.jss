module.exports=function(req,res,utils){
    res.send(utils.render('runner',{
        component:'combobox',
        externalLinks:[
            '/kissy/src/button/assets/dpl.css',
            '/kissy/src/combobox/assets/dpl.css',
            '/kissy/src/menu/assets/dpl.css']
    }));
};