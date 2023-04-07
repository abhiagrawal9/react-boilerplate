module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'hotfix',
        'improvement',
        'feat',
        'fix',
        'refactor',
        'revert',
        'release',
        'test',
      ],
    ],
  },
};
