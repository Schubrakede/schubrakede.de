<template>
  <Layout>
    <div>
      <h1>Hello</h1>
      <div>{{$page}}</div>
    </div>
  </Layout>
</template>


<page-query>
query Index{
  site: site(id: "8b7eef239c7763e2ba8567c18cb858e8"){
    description,
    title,
    missiontext,
    sprinttext,
    teammember{
      Title,
      Image,
      Name,
      Description
    }
  }
}
</page-query>
<script>
export default {};
</script>

<style>
</style>
