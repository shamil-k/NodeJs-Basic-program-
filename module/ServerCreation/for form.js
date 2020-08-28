$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
        fname:{
            required:true,
            minlength:6
        },
        sname:{
            required:true,
            minlength:6

        },
        forMail:{
            required:true,
            email:true

        },
        forGender:{
            required:true



        },
        messages:{
            fname:{
                required:"Enter first name",
                minlength:"Enter atleast 6 charecter "

        }


    },}
    })
})