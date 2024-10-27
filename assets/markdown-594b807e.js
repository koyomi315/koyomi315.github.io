import{d as t,o as r,c as e,E as n}from"./app-b08b7487.js";const s={class:"markdown-body"},l=n('<h2>主要内容</h2><blockquote><h4>Markdown<em>是什么</em>？</h4><h4><em>谁</em>创造了它？</h4><h4><em>为什么</em>要使用它？</h4><h4><em>怎么</em>使用？</h4><h4><em>谁</em>在用？</h4><h4>尝试一下</h4></blockquote><h2>正文</h2><h3>1. Markdown<em>是什么</em>？</h3><p><strong>Markdown</strong>是一种轻量级<strong>标记语言</strong>，它以纯文本形式(<em>易读、易写、易更改</em>)编写文档，并最终以HTML格式发布。<br><strong>Markdown</strong>也可以理解为将以MARKDOWN语法编写的语言转换成HTML内容的工具。</p><h3>2. <em>谁</em>创造了它？</h3><p>它由<a href="http://www.aaronsw.com/"><strong>Aaron Swartz</strong></a>和<strong>John Gruber</strong>共同设计，<strong>Aaron Swartz</strong>就是那位于去年（<em>2013年1月11日</em>）自杀,有着<strong>开挂</strong>一般人生经历的程序员。维基百科对他的<a href="http://zh.wikipedia.org/wiki/%E4%BA%9A%E4%BC%A6%C2%B7%E6%96%AF%E6%B2%83%E8%8C%A8">介绍</a>是：<strong>软件工程师、作家、政治组织者、互联网活动家、维基百科人</strong>。</p><p>他有着足以让你跪拜的人生经历：</p><ul><li><strong>14岁</strong>参与RSS 1.0规格标准的制订。</li><li><strong>2004</strong>年入读<strong>斯坦福</strong>，之后退学。</li><li><strong>2005</strong>年创建<a href="http://infogami.org/">Infogami</a>，之后与<a href="http://www.reddit.com/">Reddit</a>合并成为其合伙人。</li><li><strong>2010</strong>年创立求进会（Demand Progress），积极参与禁止网络盗版法案（SOPA）活动，最终该提案被撤回。</li><li><strong>2011</strong>年7月19日，因被控从MIT和JSTOR下载480万篇学术论文并以免费形式上传于网络被捕。</li><li><strong>2013</strong>年1月自杀身亡。</li></ul><p><img src="https://github.com/younghz/Markdown/raw/master/resource/Aaron_Swartz.jpg" alt="Aaron Swartz"></p><p>天才都有早逝的归途。</p><h3>3. <em>为什么</em>要使用它？</h3><ul><li>它是易读（看起来舒服）、易写（语法简单）、易更改<strong>纯文本</strong>。处处体现着<strong>极简主义</strong>的影子。</li><li>兼容HTML，可以转换为HTML格式发布。</li><li>跨平台使用。</li><li>越来越多的网站支持Markdown。</li><li>更方便清晰地组织你的电子邮件。（Markdown-here, Airmail）</li><li>摆脱Word（我不是认真的）。</li></ul><h3>4. <em>怎么</em>使用？</h3><p>如果不算<strong>扩展</strong>，Markdown的语法绝对<strong>简单</strong>到让你爱不释手。</p><p>Markdown语法主要分为如下几大部分： <strong>标题</strong>，<strong>段落</strong>，<strong>区块引用</strong>，<strong>代码区块</strong>，<strong>强调</strong>，<strong>列表</strong>，<strong>分割线</strong>，<strong>链接</strong>，<strong>图片</strong>，<strong>反斜杠 <code class="">\\</code></strong>，<strong>符号’`&#39;</strong>。</p><h4>4.1 标题</h4><p>两种形式：<br> 1）使用<code class="">=</code>和<code class="">-</code>标记一级和二级标题。</p><blockquote><p>一级标题<br><code class="">=========</code><br> 二级标题<br><code class="">---------</code></p></blockquote><p>效果：</p><blockquote><h1>一级标题</h1><h2>二级标题</h2></blockquote><p>2）使用<code class="">#</code>，可表示1-6级标题。</p><blockquote><p># 一级标题<br> ## 二级标题<br> ### 三级标题<br> #### 四级标题<br> ##### 五级标题<br> ###### 六级标题</p></blockquote><p>效果：</p><blockquote><h1>一级标题</h1><h2>二级标题</h2><h3>三级标题</h3><h4>四级标题</h4><h5>五级标题</h5><h6>六级标题</h6></blockquote><h4>4.2 段落</h4><p>段落的前后要有空行，所谓的空行是指没有文字内容。若想在段内强制换行的方式是使用<strong>两个以上</strong>空格加上回车（引用中换行省略回车）。</p><h4>4.3 区块引用</h4><p>在段落的每行或者只在第一行使用符号<code class="">&gt;</code>,还可使用多个嵌套引用，如：</p><blockquote><p>&gt; 区块引用<br> &gt;&gt; 嵌套引用</p></blockquote><p>效果：</p><blockquote><p>区块引用</p><blockquote><p>嵌套引用</p></blockquote></blockquote><h4>4.4 代码区块</h4><p>代码区块的建立是在每行加上4个空格或者一个制表符（如同写代码一样）。如<br> 普通段落：</p><p>void main()<br> {<br> printf(“Hello, Markdown.”);<br> }</p><p>代码区块：</p><pre><code class="">void main()\n{\n    printf(&quot;Hello, Markdown.&quot;);\n}\n</code></pre><p><strong>注意</strong>:需要和普通段落之间存在空行。</p><h4>4.5 强调</h4><p>在强调内容两侧分别加上<code class="">*</code>或者<code class="">_</code>，如：</p><blockquote><p>*斜体*，_斜体_<br> **粗体**，__粗体__</p></blockquote><p>效果：</p><blockquote><p><em>斜体</em>，<em>斜体</em><br><strong>粗体</strong>，<strong>粗体</strong></p></blockquote><h4>4.6 列表</h4><p>使用<code class="">·</code>、<code class="">+</code>、或<code class="">-</code>标记无序列表，如：</p><blockquote><p>-（+*） 第一项 -（+*） 第二项 - （+*）第三项</p></blockquote><p><strong>注意</strong>：标记后面最少有一个_空格_或_制表符_。若不在引用区块中，必须和前方段落之间存在空行。</p><p>效果：</p><blockquote><ul><li>第一项</li><li>第二项</li><li>第三项</li></ul></blockquote><p>有序列表的标记方式是将上述的符号换成数字,并辅以<code class="">.</code>，如：</p><blockquote><p>1 . 第一项<br> 2 . 第二项<br> 3 . 第三项</p></blockquote><p>效果：</p><blockquote><ol><li>第一项</li><li>第二项</li><li>第三项</li></ol></blockquote><h4>4.7 分割线</h4><p>分割线最常使用就是三个或以上<code class="">*</code>，还可以使用<code class="">-</code>和<code class="">_</code>。</p><h4>4.8 链接</h4><p>链接可以由两种形式生成：<strong>行内式</strong>和<strong>参考式</strong>。<br><strong>行内式</strong>：</p><blockquote><p>[younghz的Markdown库](https:://github.com/younghz/Markdown “Markdown”)。</p></blockquote><p>效果：</p><blockquote><p><a href="https:://github.com/younghz/Markdown" title="Markdown">younghz的Markdown库</a>。</p></blockquote><p><strong>参考式</strong>：</p><blockquote><p>[younghz的Markdown库1][1]<br> [younghz的Markdown库2][2]<br> [1]:https:://github.com/younghz/Markdown “Markdown”<br> [2]:https:://github.com/younghz/Markdown “Markdown”</p></blockquote><p>效果：</p><blockquote><p><a href="https:://github.com/younghz/Markdown" title="Markdown">younghz的Markdown库1</a><br><a href="https:://github.com/younghz/Markdown" title="Markdown">younghz的Markdown库2</a></p></blockquote><p><strong>注意</strong>：上述的<code class="">[1]:https:://github.com/younghz/Markdown &quot;Markdown&quot;</code>不出现在区块中。</p><h4>4.9 图片</h4><p>添加图片的形式和链接相似，只需在链接的基础上前方加一个<code class="">！</code>。</p><h4>4.10 反斜杠<code class="">\\</code></h4><p>相当于<strong>反转义</strong>作用。使符号成为普通符号。</p><h4>4.11 符号’`’</h4><p>起到标记作用。如：</p><blockquote><p>`ctrl+a`</p></blockquote><p>效果：</p><blockquote><p><code class="">ctrl+a</code></p></blockquote><h4>5. <em>谁</em>在用？</h4><p>Markdown的使用者：</p><ul><li>GitHub</li><li>简书</li><li>Stack Overflow</li><li>Apollo</li><li>Moodle</li><li>Reddit</li><li>等等</li></ul><h4>6. 尝试一下</h4><ul><li><strong>Chrome</strong>下的插件诸如<code class="">stackedit</code>与<code class="">markdown-here</code>等非常方便，也不用担心平台受限。</li><li><strong>在线</strong>的dillinger.io评价也不错</li><li><strong>Windowns</strong>下的MarkdownPad也用过，不过免费版的体验不是很好。</li><li><strong>Mac</strong>下的Mou是国人贡献的，口碑很好。</li><li><strong>Linux</strong>下的ReText不错。</li></ul><p><strong>当然，最终境界永远都是笔下是语法，心中格式化 :)。</strong></p><hr><p><strong>注意</strong>：不同的Markdown解释器或工具对相应语法（扩展语法）的解释效果不尽相同，具体可参见工具的使用说明。 虽然有人想出面搞一个所谓的标准化的Markdown，[没想到还惹怒了健在的创始人John Gruber] (<a href="http://blog.codinghorror.com/standard-markdown-is-now-common-markdown/">http://blog.codinghorror.com/standard-markdown-is-now-common-markdown/</a> )。</p><hr><p>以上基本是所有traditonal markdown的语法。</p><h3>其它：</h3><p>列表的使用(非traditonal markdown)：</p><p>用<code class="">|</code>表示表格纵向边界，表头和表内容用<code class="">-</code>隔开，并可用<code class="">:</code>进行对齐设置，两边都有<code class="">:</code>则表示居中，若不加<code class="">:</code>则默认左对齐。</p><table><thead><tr><th style="text-align:center;">代码库</th><th>链接</th></tr></thead><tbody><tr><td style="text-align:center;">MarkDown</td><td><a href="https://github.com/younghz/Markdown" title="Markdown">https://github.com/younghz/Markdown</a></td></tr><tr><td style="text-align:center;">MarkDownCopy</td><td><a href="https://github.com/younghz/Markdown" title="Markdown">https://github.com/younghz/Markdown</a></td></tr></tbody></table><p>关于其它扩展语法可参见具体工具的使用说明。</p>',89),c=[l],h={title:"Markdown",date:"2024-03-19T00:00:00.000Z",brief:"Markdown Test.",image:"https://image.insorker.site/2023/08/48b730d215b8549edc5230fd568e78d1.png",notbyai:!0},i="",k=t({__name:"markdown",setup(a,{expose:o}){return o({frontmatter:{title:"Markdown",date:"2024-03-19T00:00:00.000Z",brief:"Markdown Test.",image:"https://image.insorker.site/2023/08/48b730d215b8549edc5230fd568e78d1.png",notbyai:!0},excerpt:void 0}),(d,p)=>(r(),e("div",s,c))}});export{k as default,i as excerpt,h as frontmatter};
