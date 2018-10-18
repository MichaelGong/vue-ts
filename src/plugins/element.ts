import Vue from 'vue';
// import { ElementUIComponent } from 'element-ui/types/component';
// declare class ElScrollbar extends ElementUIComponent {}

import {
  Button,
  Loading,
  Message,
  Notification,
  MessageBox,
  Row,
  Col,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Container,
  Aside,
  Scrollbar,
  Header,
  Main,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Table,
  TableColumn,
} from 'element-ui';


Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Scrollbar);
Vue.use(Header);
Vue.use(Main);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);

Loading.install(Vue);
// ??? 要还是不要呢 ???
Vue.prototype.$message = Message;
Vue.prototype.$notify = Notification;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
