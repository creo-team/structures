import { describe, expect, it } from 'vitest'

import type { Bugs, Dependencies, PackageJson, Person, PublishConfig, Repository } from '../src/package-json'

describe('PackageJson Structure', () => {
	it('should define correct structure for author field', () => {
		const author: Person = {
			email: 'johndoe@example.com',
			name: 'John Doe',
			url: 'https://example.com',
		}
		expect(author).toEqual({
			email: 'johndoe@example.com',
			name: 'John Doe',
			url: 'https://example.com',
		})
	})

	it('should define correct structure for repository field', () => {
		const repository: Repository = {
			type: 'git',
			url: 'https://github.com/example/repo.git',
		}
		expect(repository).toEqual({
			type: 'git',
			url: 'https://github.com/example/repo.git',
		})
	})

	it('should define correct structure for bugs field', () => {
		const bugs: Bugs = {
			email: 'support@example.com',
			url: 'https://github.com/example/repo/issues',
		}
		expect(bugs).toEqual({
			email: 'support@example.com',
			url: 'https://github.com/example/repo/issues',
		})
	})

	it('should define correct structure for publishConfig field', () => {
		const publishConfig: PublishConfig = {
			access: 'public',
			registry: 'https://registry.npmjs.org/',
		}
		expect(publishConfig).toEqual({
			access: 'public',
			registry: 'https://registry.npmjs.org/',
		})
	})

	it('should define correct structure for dependencies', () => {
		const dependencies: Dependencies = {
			jest: '^26.6.0',
			typescript: '^4.0.0',
		}
		expect(dependencies).toEqual({
			jest: '^26.6.0',
			typescript: '^4.0.0',
		})
	})

	it('should define correct structure for PackageJsonType', () => {
		const packageJson: PackageJson = {
			author: {
				email: 'johndoe@example.com',
				name: 'John Doe',
			},
			dependencies: {
				typescript: '^4.0.0',
			},
			description: 'An example package',
			devDependencies: {
				jest: '^26.6.0',
			},
			license: 'MIT',
			name: '@example/package',
			repository: {
				type: 'git',
				url: 'https://github.com/example/repo.git',
			},
			scripts: {
				build: 'tsc',
				test: 'jest',
			},
			version: '1.0.0',
		}
		expect(packageJson).toEqual({
			author: {
				email: 'johndoe@example.com',
				name: 'John Doe',
			},
			dependencies: {
				typescript: '^4.0.0',
			},
			description: 'An example package',
			devDependencies: {
				jest: '^26.6.0',
			},
			license: 'MIT',
			name: '@example/package',
			repository: {
				type: 'git',
				url: 'https://github.com/example/repo.git',
			},
			scripts: {
				build: 'tsc',
				test: 'jest',
			},
			version: '1.0.0',
		})
	})
})
