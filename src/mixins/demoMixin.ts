/* tslint:disable:no-console */
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DemoMixin extends Vue {
  public ttt: string = 'ttt';
  public created() {
    console.log('DemoMixin created');
  }
  public changeTTT() {
    console.log('DemoMixin changeTTT');
    this.ttt = 'ttt2';
  }
}
