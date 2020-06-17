<script type="text/javascript">
    var tmp = '';
    for(var i = 1; i < 10; i++){
        for(var j = 1; j < 10; j++){
            if(j <= i){
                tmp = tmp + `${i}*${j}=`+i*j+' ';
            }
        }
        tmp += '\n';
    }
    console.log(tmp)
</script>