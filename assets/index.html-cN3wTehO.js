import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,f as s}from"./app-CNO2LRzS.js";const o={},t=s(`<h2 id="ejecutar-contenedor-docker" tabindex="-1"><a class="header-anchor" href="#ejecutar-contenedor-docker"><span><i class="fa-brands fa-docker" style="color:#74C0FC;"></i> Ejecutar contenedor docker</span></a></h2><h3 id="requisitos-minimos-de-docker" tabindex="-1"><a class="header-anchor" href="#requisitos-minimos-de-docker"><span>Requisitos mínimos de Docker</span></a></h3><p>Para utilizar esta imagen Docker debe tener su motor Docker número de versión mayor o igual a 3.0. Crear imagen Docker (solo para desarrollo):</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> solopcloud/adempiere-vue:dev <span class="token parameter variable">-f</span> ./Dockerfile <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="descargar-imagen-docker" tabindex="-1"><a class="header-anchor" href="#descargar-imagen-docker"><span>Descargar imagen docker:</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull solopcloud/adempiere-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ejecutar-contenedor-contenedor" tabindex="-1"><a class="header-anchor" href="#ejecutar-contenedor-contenedor"><span>Ejecutar contenedor contenedor:</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-it</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">--name</span> adempiere-vue <span class="token punctuation">\\</span>
	<span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
	<span class="token parameter variable">-e</span> <span class="token assign-left variable">API_URL</span><span class="token operator">=</span><span class="token string">&quot;http://localhost:9527/api/&quot;</span> <span class="token punctuation">\\</span>
	<span class="token parameter variable">-e</span> <span class="token assign-left variable">TZ</span><span class="token operator">=</span><span class="token string">&quot;America/Caracas&quot;</span> <span class="token punctuation">\\</span>
	solopcloud/adempiere-vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="o-ejecute-facilmente-el-contenedor-utilizando-docker-compose-con-el-siguiente-comando" tabindex="-1"><a class="header-anchor" href="#o-ejecute-facilmente-el-contenedor-utilizando-docker-compose-con-el-siguiente-comando"><span>O ejecute fácilmente el contenedor utilizando docker-compose con el siguiente comando:</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker-compose</span> up
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),r=[t];function c(i,l){return a(),n("div",null,r)}const u=e(o,[["render",c],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/es/get-started/Docker/","title":"Docker","lang":"es-ES","frontmatter":{"title":"Docker","icon":"clone","star":true,"sticky":10,"dir":{"order":1},"category":["Cookbook","Tutorial","Get Started","Docker"],"description":" Ejecutar contenedor docker Requisitos mínimos de Docker Para utilizar esta imagen Docker debe tener su motor Docker número de versión mayor o igual a 3.0. Crear imagen Docker (...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://github.com/adempiere/vue-ui-theme.github.io/get-started/Docker/"}],["meta",{"property":"og:url","content":"https://github.com/adempiere/vue-ui-theme.github.io/es/get-started/Docker/"}],["meta",{"property":"og:site_name","content":"Adempiere Interfaz Usuario"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":" Ejecutar contenedor docker Requisitos mínimos de Docker Para utilizar esta imagen Docker debe tener su motor Docker número de versión mayor o igual a 3.0. Crear imagen Docker (..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"es-ES"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-01T15:32:16.000Z"}],["meta",{"property":"article:author","content":"Elsio Sanchez"}],["meta",{"property":"article:modified_time","content":"2024-03-01T15:32:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T15:32:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Elsio Sanchez\\",\\"url\\":\\"https://github.com/elsiosanchez\\"}]}"]]},"headers":[{"level":2,"title":"Ejecutar contenedor docker","slug":"ejecutar-contenedor-docker","link":"#ejecutar-contenedor-docker","children":[{"level":3,"title":"Requisitos mínimos de Docker","slug":"requisitos-minimos-de-docker","link":"#requisitos-minimos-de-docker","children":[]},{"level":3,"title":"Descargar imagen docker:","slug":"descargar-imagen-docker","link":"#descargar-imagen-docker","children":[]},{"level":3,"title":"Ejecutar contenedor contenedor:","slug":"ejecutar-contenedor-contenedor","link":"#ejecutar-contenedor-contenedor","children":[]},{"level":3,"title":"O ejecute fácilmente el contenedor utilizando docker-compose con el siguiente comando:","slug":"o-ejecute-facilmente-el-contenedor-utilizando-docker-compose-con-el-siguiente-comando","link":"#o-ejecute-facilmente-el-contenedor-utilizando-docker-compose-con-el-siguiente-comando","children":[]}]}],"git":{"createdTime":1709307136000,"updatedTime":1709307136000,"contributors":[{"name":"Elsio Sanchez","email":"elsiosanches@gmail.com","commits":1}]},"readingTime":{"minutes":0.38,"words":115},"filePathRelative":"es/get-started/Docker/README.md","localizedDate":"1 de marzo de 2024","excerpt":"<h2><i class=\\"fa-brands fa-docker\\" style=\\"color: #74C0FC;\\"> Ejecutar contenedor docker</i></h2><i class=\\"fa-brands fa-docker\\" style=\\"color: #74C0FC;\\">\\n<h3>Requisitos mínimos de Docker</h3>\\n<p>Para utilizar esta imagen Docker debe tener su motor Docker número de versión mayor o igual a 3.0.\\nCrear imagen Docker (solo para desarrollo):</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> build <span class=\\"token parameter variable\\">-t</span> solopcloud/adempiere-vue:dev <span class=\\"token parameter variable\\">-f</span> ./Dockerfile <span class=\\"token builtin class-name\\">.</span>\\n</code></pre></div><h3>Descargar imagen docker:</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> pull solopcloud/adempiere-vue\\n</code></pre></div><h3>Ejecutar contenedor contenedor:</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker</span> run <span class=\\"token parameter variable\\">-it</span> <span class=\\"token punctuation\\">\\\\</span>\\n\\t<span class=\\"token parameter variable\\">--name</span> adempiere-vue <span class=\\"token punctuation\\">\\\\</span>\\n\\t<span class=\\"token parameter variable\\">-p</span> <span class=\\"token number\\">80</span>:80 <span class=\\"token punctuation\\">\\\\</span>\\n\\t<span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">API_URL</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"http://localhost:9527/api/\\"</span> <span class=\\"token punctuation\\">\\\\</span>\\n\\t<span class=\\"token parameter variable\\">-e</span> <span class=\\"token assign-left variable\\">TZ</span><span class=\\"token operator\\">=</span><span class=\\"token string\\">\\"America/Caracas\\"</span> <span class=\\"token punctuation\\">\\\\</span>\\n\\tsolopcloud/adempiere-vue\\n</code></pre></div><h3>O ejecute fácilmente el contenedor utilizando docker-compose con el siguiente comando:</h3>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">docker-compose</span> up\\n</code></pre></div></i>","autoDesc":true}');export{u as comp,m as data};
