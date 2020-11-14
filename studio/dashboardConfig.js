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
                  buildHookId: '5fb06df8086812f98a0a4002',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3dgxk8z3',
                  apiId: '607f449a-0702-461b-b037-bd93b47229f6'
                },
                {
                  buildHookId: '5fb06df8fcd4be2f92bc0727',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-edftjnf6',
                  apiId: 'd3715a8e-6647-47c7-97f4-5dd0a15e1935'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryan-whittingham-v1/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-edftjnf6.netlify.app',
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
