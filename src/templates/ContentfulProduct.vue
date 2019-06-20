<template>
  <Layout>
    <div class="shop">
      <g-link to="/shop" class="mb-3">< Return</g-link>
      <h2>{{ $page.contentfulProduct.title }}</h2>
      <p>{{ $page.contentfulProduct.description }}</p>
      <ul>
        <li>{{ $page.contentfulProduct.specifications }}</li>
        <li>{{ $page.contentfulProduct.dimensions }}</li>
        <li>{{ $page.contentfulProduct.materials }}</li>
      </ul>
    </div>
  </Layout>
</template>

<page-query>
  query Product($path: String!) {
    contentfulProduct(path: $path) {
      id
      title
      description
      specifications
      dimensions
      materials
    }
  }
</page-query>

<script>
export default {
  name: 'ContentfulProduct'
}
</script>
