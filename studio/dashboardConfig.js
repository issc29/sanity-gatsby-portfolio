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
                  buildHookId: '6205c4d2bf939f005da5d7bb',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-jgwnx3su',
                  apiId: '85b69acf-e6ae-421e-a9a3-1dcc5dd0c9dc'
                },
                {
                  buildHookId: '6205c4d28532fd00a4ea8b96',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-835tvnno',
                  apiId: 'fe63aba2-fc80-48ae-9f85-00a708bb72c6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/issc29/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-835tvnno.netlify.app',
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
