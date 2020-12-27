import React from 'react'

const DynamicPage = () => (
  <div>DynamicPage</div>
)

export const getStaticPaths = async ({ locales }) => ({
  fallback: false,
  paths: [
    {
      params: {
        slug: ['company', 'about-us'],
      },
    },
  ],
})

export const getStaticProps = async () => ({
  props: {},
})

export default DynamicPage
