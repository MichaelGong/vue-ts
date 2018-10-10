import Vue from 'vue';
import {
  Button,
  Loading,
  Message,
  Notification,
  MessageBox,
} from 'element-ui';

Vue.use(Button);
Loading.install(Vue);
// ??? 要还是不要呢 ???
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
