import { IMenuConfig } from '@/config/types';

const menuConfig: IMenuConfig[]  = [{
  id: 'lab',
  name: 'Lab',
  icon: 'el-icon-news',
  children: [{
    id: 'drag',
    name: 'vue拖拽指令',
    url: '/drag',
    icon: 'el-icon-rank',
  }, {
    id: 'filterhue',
    name: 'Filter Hue',
    url: '/filterhue',
    icon: 'el-icon-rank',
  }, {
    id: 'ticket',
    name: 'Ticket',
    url: '/ticket',
    icon: 'el-icon-rank',
  }],
}, {
  id: 'react-cnode',
  name: 'react版CNode',
  url: 'https://cnode.happybug.top',
  icon: 'el-icon-goods',
}];

export default menuConfig;
