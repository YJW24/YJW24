import{_ as n,o as a,c as s,e as t}from"./app-114ee310.js";const e={},c=t(`<h3 id="_1-data-的使用-有什么优势" tabindex="-1"><a class="header-anchor" href="#_1-data-的使用-有什么优势" aria-hidden="true">#</a> 1. <code>data-*</code>的使用，有什么优势？</h3><p><code>data-*</code>全局属性是一类被称为<strong>自定义数据属性</strong>的属性，赋予了在 HTML 元素上嵌入自定义数据属性的能力，并可以动过脚本在<code>HTML</code>与<code>DOM</code>表现之间进行数据交换。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>electriccars<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>3<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-index-number</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>12314<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-parent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cars<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 javascript 进行访问:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> article <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&quot;#electriccars&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 1.通过getAttribute：</span>
<span class="token keyword">const</span> column <span class="token operator">=</span> article<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">&quot;data-column&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// “3”</span>

<span class="token comment">// 2.通过dataset读取数据（推荐，更简洁）：</span>
article<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>columns<span class="token punctuation">;</span> <span class="token comment">// &quot;3&quot;</span>
article<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>indexNumber<span class="token punctuation">;</span> <span class="token comment">// &quot;12314&quot;</span>
article<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>parent<span class="token punctuation">;</span> <span class="token comment">// &quot;cars&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过 css 访问:</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 可以通过 generated content 使用函数 attr 显示 data-parent 的内容 */</span>
<span class="token selector">article::before</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-parent<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 使用属性选择器，根据data来改变样式 */</span>
<span class="token selector">article[data-columns=&quot;3&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">article[data-columns=&quot;4&quot;]</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),p=[c];function o(l,i){return a(),s("div",null,p)}const d=n(e,[["render",o],["__file","data.html.vue"]]);export{d as default};
