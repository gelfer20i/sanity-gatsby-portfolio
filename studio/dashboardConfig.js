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
                  buildHookId: '63365cf58a584a1c42b9f26e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-xhe8fdct',
                  apiId: '3b7ec6ca-5ae2-4487-a4a8-10c7a14dd874'
                },
                {
                  buildHookId: '63365cf61c5e9f1b918c2ee3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nxqjm5mc',
                  apiId: 'b9f7aca6-d3b6-4008-963a-b0333f7e9a15'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gelfer20i/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nxqjm5mc.netlify.app',
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
