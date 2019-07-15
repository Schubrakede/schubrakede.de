<template>
  <div>
    <h1>Hello</h1>
    <div>{{$page}}</div>
  </div>
</template>


<page-query>
query Index{
  pages: pages(id: "8b7eef239c7763e2ba8567c18cb858e8"){
    path,
    id,
    title
  }
}
</page-query>
<script>
export default {};
</script>

<style>
</style>
