const { findWorkspacePackagesSync } = require('@rnx-kit/tools-workspaces');
const packages = findWorkspacePackagesSync();

console.log('packages: ', packages);
if (packages.length <= 0) {
    throw new Error('packages are empty! bug reproduced!');
}