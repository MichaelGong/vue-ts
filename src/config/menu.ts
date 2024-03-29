import { IMenuConfig } from '@/config/types';

const menuConfig: IMenuConfig[]  = [{
  id: 'lab',
  name: 'Lab',
  icon: 'el-icon-news',
  children: [{
    id: 'drag',
    name: 'vue拖拽指令',
    url: '/drag',
  }, {
    id: 'filterhue',
    name: 'Filter Hue',
    url: '/filterhue',
  }, {
    id: 'ticket',
    name: 'Ticket',
    url: '/ticket',
  }, {
    id: 'audio',
    name: 'Audio',
    url: '/audio',
  }, {
    id: 'jstypeconversion',
    name: 'JS类型转换',
    url: '/jstypeconversion',
  }, {
    id: 'cssweight',
    name: 'Css选择器与权重',
    url: '/cssweight',
  }, {
    id: 'knowledge',
    name: '知识点',
    url: '/knowledge',
  }],
}, {
  id: 'react-cnode',
  name: 'react版CNode',
  url: 'https://cnode.happybug.top',
  icon: 'el-icon-goods',
}];

export default menuConfig;
