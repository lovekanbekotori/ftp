/* 存放软件需要发送过来的事件 */

function e_alert (content, type) {
  layer.alert(content, {icon: type,shade: 0});
}

function e_msg (content, type) {
  layer.msg(content, {icon: type,shade: 0, time: 1500});
}

var load_index = undefined;

function e_loading (type) {
  load_index = layer.load(type);
}

function e_loadend (type) {
  layer.close(load_index);
}

// 向 Vue 增加管理员账号密码数据
function e_set_account (content) {
  app.account.data.push(eval('(' + content + ')')); 
}

var code_alert_index = undefined;


// 更新登录状态
function e_update_login_state (index) {
  app.account.data[index].state = '已登录'; 
}

// 增加一行文件
function e_add_file (file) {
  app.file.data.push( file );
}

// 清除所有文件
function e_remove_all_file () {
  app.file.data = [];
}

// 更新文件上传状态
function e_update_file_state (index, state) {
  if (app.file.data[index].state == '失败') {
    return;
  }
  
  if (state) {
    app.file.data[index].state = '成功'; 
  } else {
    app.file.data[index].state = '失败'; 
  }

};

// 设置服务器路径
function e_set_path (path) {
  app.path = path;
}

// 设置同时上传数
function e_set_thread (thread) {
  app.thread = thread;
}