/**/_jsload2&&_jsload2('groundoverlay', 'A.extend(dd.prototype,{mb:function(){if(this.map){this.ba||this.Cj();var a=this.map.ja();if(a<this.K.Zr||a>this.K.Yr)this.$();else{var b=this.K.ib.Ve(),c=this.K.ib.Qf(),a=this.map.Ye(b).x,e=this.map.Ye(c).y,c=this.map.Ye(c).x,b=this.map.Ye(b).y;this.ba.style.left=a+"px";this.ba.style.top=e+"px";this.ba.style.width=c-a+"px";this.ba.style.height=b-e+"px";this.show()}}},draw:function(){this.mb()},Cj:function(){if(!this.ba){this.ba=document.createElement("div");var a=this.ba.style;a.cssText="position: absolute; -moz-user-select: none; overflow: hidden;"; a.zIndex=Vc.zk(this.K.ib.Ve().lat);if(this.K.opacity||0===this.K.opacity)a.opacity=this.K.opacity,a.filter="alpha(opacity="+100*parseInt(this.K.opacity,10)+")";this.Qg=document.createElement("img");this.Qg.style.width="100%";this.K.K_&&(this.Qg.style.height="100%");this.ba.appendChild(this.Qg);var b=this;this.Qg.onload=function(){b.E1=b.Qg.naturalWidth||b.Qg.width;b.D1=b.Qg.naturalHeight||b.Qg.height};this.K.Zo&&(this.Qg.src=this.K.Zo);this.map.Rf().eE.appendChild(this.ba);b=this;A.V(this.ba,"click", function(a){b.dispatchEvent(new P("click"),a)});A.V(this.ba,"dblclick",function(a){b.dispatchEvent(new P("dblclick"),a)})}},e_:function(a){this.K.ib=a;this.map&&this.mb();this.ba.style.zIndex=Vc.zk(this.K.ib.Ve().lat)},te:function(){return this.K.ib},YE:function(a){this.K.opacity=a;this.ba.style.opacity=a;this.ba.style.filter="alpha(opacity="+100*parseInt(a,10)+")"},uX:function(){return this.K.opacity},j_:function(a){this.K.Zo=a;this.Qg&&(this.Qg.src=a)},hX:function(){return this.K.Zo},z5:function(a){this.K.Zr= a},l3:function(){return this.K.Zr},y5:function(a){this.K.Yr=a},k3:function(){return this.K.Yr}});dd.prototype.setBounds=dd.prototype.e_;dd.prototype.getBounds=dd.prototype.te;dd.prototype.setOpacity=dd.prototype.YE;dd.prototype.getOpacity=dd.prototype.uX;dd.prototype.setImageURL=dd.prototype.j_;dd.prototype.getImageURL=dd.prototype.hX;dd.prototype.setDispalyOnMinLevel=dd.prototype.x5;dd.prototype.setDispalyOnMaxLevel=dd.prototype.w5; ');
