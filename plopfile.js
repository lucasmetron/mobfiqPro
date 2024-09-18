module.exports = plop => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'generators/templates/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'generators/templates/Styles.ts.hbs',
      },
    ],
  });
};
