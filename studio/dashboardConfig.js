export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619a2900392a0614ab3cf804',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-5aqchv8c',
                  apiId: '0b3fe9cf-d1fa-4614-b39f-93f68fa7858a'
                },
                {
                  buildHookId: '619a2901631a90f8729db683',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pzj13w6e',
                  apiId: '9ce70c77-a62c-45d6-8902-f96bf46f5a57'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Conorhugh404/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pzj13w6e.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
