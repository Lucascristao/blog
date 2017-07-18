function converter(){var ele1=document.getElementById("bloggermadruga");var replaced;replaced=ele1.value;replaced=replaced.replace(/Â©/ig,"&copy;");replaced=replaced.replace(/'/ig,"&#039;");replaced=replaced.replace(/</ig,"&lt;");replaced=replaced.replace(/>/ig,"&gt;");replaced=replaced.replace(/"/ig,"&quot;");ele1.value=replaced;}
document.write('<center><div style="width: 450px;">\
<textarea id="bloggermadruga" style="border: 1px solid gray; height: 140px; width: 450px;" value="Cole seu código aqui e pressione Converter Codigo..."></textarea>\
<div id="mainformconversor"><div id="botaoconversor" style="float: left;"><input onclick="converter();" type="button" value="Converter Codigo" /></div>\
<div id="creditostBmadru" style="float: right;"><a title="Blogger tutoriais - Tudo sobre Blogger!" href="https://www.bloggermadru.ga" target="_blank">Editado por Blogger tutoriais</a></div>\
</div></div></center>')
