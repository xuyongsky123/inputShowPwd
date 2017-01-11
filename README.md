<h2>inputShowPwd.js简介<a href="demo.html">input密码框的明文显示(inputShowPwd.js)的使用示例</a></h2>
<p>inputShowPwd.js是基于jquery封装开发用于实现input密码框的明文显示功能的js组件，用于格式化一个或多个密码框，实现密码的查看功能</p>

<hr/>

<h3>1、开始工作：</h3>
<p>
  最先引入jquery (Bootstrap中文网开源项目免费 CDN 服务)：
</p>
<pre><script-tag type="text/javascript" src="//cdn.bootcss.com/jquery/1.9.1/jquery.min.js"></script-tag></pre>
<p>
  再次页面中引入：
</p>
<pre><script-tag type="text/javascript" src="....../inputShowPwd.js"></script-tag></pre>

<h3>2、使用：</h3>
<h4>html：</h4>
<p>
  （固定格式html准备）
</p>
<pre><div class="inputShowPwd">
<input type="password" placeholder="请填入密码"/>
<span class="showEle"></span>
</div></pre>

<h4>css（添加当前样式）：</h4>
<pre><link-tag rel="stylesheet" type="text/css" href="....../inputShowPwd.css" /></pre>

<h4>js（实例化相应的密码显示框）：</h4>
<pre>var _input = new inputShowPwd('inputShowPwd');</pre>

<h3>3、说明：</h3>
<p>
  其中inputShowPwd.css为框架样式必须引进，当你需要更改密码框样式的时候，请按需适当修改即可
</p>

<h3>4、兼容性：</h3>
<p>
  兼容IE8及以上浏览器
</p>
