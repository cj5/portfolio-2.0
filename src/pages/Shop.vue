<template>
  <Layout>
    <div v-for="(i, key) in $page.allContentfulProduct.edges" :key="key">
      <g-image :src="i.node.image[0]"></g-image>
      <h2><g-link :to="`/product/${i.node.slug}`">{{ i.node.title }}</g-link></h2>
    </div>
  </Layout>
</template>

<page-query>
query {
  allContentfulProduct {
    edges {
      node {
        title
        image
        description
        slug
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Shop',
}
</script>

