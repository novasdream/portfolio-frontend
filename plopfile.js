module.exports = (plop) => {
  plop.setGenerator('entity', {
    description: 'Create an entity',
    prompts: [
      {
        type: 'list',
        name: 'entityType',
        message: 'Choose entity type',
        choices: [
          'component',
          'hook',
          'page',
          'type',
          'interface',
          'enum',
          'query',
          'slice',
          'fixture'
        ]
      },
      {
        type: 'input',
        name: 'name',
        message: 'Enter entity name'
      }
    ],
    actions: (data) => {
      if (data.entityType === 'component') {
        return [
          {
            type: 'add',
            path: 'components/{{pascalCase name}}/{{pascalCase name}}.tsx',
            templateFile: 'plop-templates/Component/Component.tsx.hbs'
          },
          {
            type: 'add',
            path: 'components/{{pascalCase name}}/test.tsx',
            templateFile: 'plop-templates/Component/test.tsx.hbs'
          },
          {
            type: 'add',
            path: 'components/{{pascalCase name}}/index.ts',
            templateFile: 'plop-templates/Component/index.ts.hbs'
          },
          {
            type: 'append',
            path: 'components/index.ts',
            separator: '',
            templateFile: 'plop-templates/Component/exportAll.ts.hbs'
          }
        ]
      } else if (data.entityType === 'hook') {
        return [
          {
            type: 'add',
            path: 'hooks/{{camelCase name}}.ts',
            templateFile: 'plop-templates/Hook/Hook.ts.hbs'
          },
          {
            type: 'append',
            path: 'hooks/index.ts',
            separator: '',
            templateFile: 'plop-templates/Hook/exportAll.ts.hbs'
          }
        ]
      } else if (data.entityType === 'page') {
        return [
          {
            type: 'add',
            path: 'pages/{{kebabCase name}}.tsx',
            templateFile: 'plop-templates/Page/Page.tsx.hbs'
          }
        ]
      } else if (data.entityType === 'type') {
        return [
          {
            type: 'add',
            path: 'types/T{{pascalCase name}}.ts',
            templateFile: 'plop-templates/Type/Type.ts.hbs'
          },
          {
            type: 'append',
            path: 'types/index.ts',
            separator: '',
            templateFile: 'plop-templates/Type/exportAll.ts.hbs'
          }
        ]
      } else if (data.entityType === 'interface') {
        return [
          {
            type: 'add',
            path: 'types/I{{pascalCase name}}.ts',
            templateFile: 'plop-templates/Interface/Interface.ts.hbs'
          },
          {
            type: 'append',
            path: 'types/index.ts',
            separator: '',
            templateFile: 'plop-templates/Interface/exportAll.ts.hbs'
          }
        ]
      } else if (data.entityType === 'enum') {
        return [
          {
            type: 'add',
            path: 'types/E{{pascalCase name}}.ts',
            templateFile: 'plop-templates/Enum/Enum.ts.hbs'
          },
          {
            type: 'append',
            path: 'types/index.ts',
            separator: '',
            templateFile: 'plop-templates/Enum/exportAll.ts.hbs'
          }
        ]
      } else if (data.entityType === 'query') {
        return [
          {
            type: 'add',
            path: 'queries/{{camelCase name}}.ts',
            templateFile: 'plop-templates/Query/Query.ts.hbs'
          },
          {
            type: 'append',
            path: 'queries/index.ts',
            separator: '',
            templateFile: 'plop-templates/Query/exportAll.ts.hbs'
          }
        ]
      } else if (data.entityType === 'slice') {
        return [
          {
            type: 'add',
            path: 'store/slices/{{camelCase name}}Slice.ts',
            templateFile: 'plop-templates/Slice/Slice.ts.hbs'
          },
          {
            type: 'append',
            path: 'store/slices/index.ts',
            separator: '',
            templateFile: 'plop-templates/Slice/exportAll.ts.hbs'
          }
        ]
      } else if (data.entityType === 'fixture') {
        return [
          {
            type: 'add',
            path: 'fixtures/{{camelCase name}}.ts',
            templateFile: 'plop-templates/Fixture/Fixture.ts.hbs'
          },
          {
            type: 'append',
            path: 'fixtures/index.ts',
            separator: '',
            templateFile: 'plop-templates/Fixture/exportAll.ts.hbs'
          }
        ]
      }
    }
  })
}
