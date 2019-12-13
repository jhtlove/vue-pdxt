<template>
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br />
    <br />
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
    <!-- i-button 全部引入的方式可以识别，按需引入不识别？ -->
    <i-button>i-button</i-button>
  </div>
</template>
<script>
import { Button } from "view-design"; //按需引入

export default {
  name: "ViewButton",
  components: {
    [Button.name]: Button
  }
};
</script>