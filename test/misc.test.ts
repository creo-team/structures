import { describe, expect, it } from 'vitest'

import {
	Env,
	FileEncoding,
	FileExtension,
	HttpContentType,
	HttpMethod,
	HttpStatus,
	LanguageCode,
	ResponseType,
	Status,
} from '../src/index'

describe('Enums', () => {
	it('should define all values for Env enum', () => {
		expect(Env).toMatchObject({
			Alpha: 'Alpha',
			Beta: 'Beta',
			Development: 'Development',
			Gamma: 'Gamma',
			Pipeline: 'Pipeline',
			Production: 'Production',
			Root: 'Root',
			Unknown: 'Unknown',
		})
	})

	it('should define all values for HttpStatus enum', () => {
		const filtered = Object.fromEntries(Object.entries(HttpStatus).filter(([key]) => Number.isNaN(Number(key))))
		expect(filtered).toMatchObject({
			Accepted: 202,
			BadGateway: 502,
			BadRequest: 400,
			Conflict: 409,
			Created: 201,
			Forbidden: 403,
			GatewayTimeout: 504,
			Gone: 410,
			HttpVersionNotSupported: 505,
			InternalServerError: 500,
			MethodNotAllowed: 405,
			NoContent: 204,
			NotAcceptable: 406,
			NotFound: 404,
			NotImplemented: 501,
			Ok: 200,
			PartialContent: 206,
			PaymentRequired: 402,
			ResetContent: 205,
			ServiceUnavailable: 503,
			TooManyRequests: 429,
			Unauthorized: 401,
			UnavailableForLegalReasons: 451,
		})
	})

	it('should define all values for HttpMethod enum', () => {
		expect(HttpMethod).toMatchObject({
			DELETE: 'DELETE',
			GET: 'GET',
			HEAD: 'HEAD',
			OPTIONS: 'OPTIONS',
			PATCH: 'PATCH',
			POST: 'POST',
			PUT: 'PUT',
		})
	})

	it('should define all values for HttpContentType enum', () => {
		expect(HttpContentType).toMatchObject({
			Css: 'text/css',
			FormUrlEncoded: 'application/x-www-form-urlencoded',
			Html: 'text/html',
			Javascript: 'application/javascript',
			Json: 'application/json',
			MultipartFormData: 'multipart/form-data',
			TextPlain: 'text/plain',
			Xml: 'application/xml',
		})
	})

	it('should define all values for FileExtension enum', () => {
		expect(FileExtension).toMatchObject({
			CSS: 'css',
			CSV: 'csv',
			DLL: 'dll',
			DOCX: 'docx',
			EXE: 'exe',
			HTML: 'html',
			JPG: 'jpg',
			JS: 'js',
			JSON: 'json',
			MKV: 'mkv',
			MP3: 'mp3',
			MP4: 'mp4',
			PDF: 'pdf',
			PNG: 'png',
			RAR: 'rar',
			TS: 'ts',
			TXT: 'txt',
			XML: 'xml',
			ZIP: 'zip',
		})
	})

	it('should define all values for FileEncoding enum', () => {
		expect(FileEncoding).toMatchObject({
			ASCII: 'ascii',
			Base64: 'base64',
			Binary: 'binary',
			Hex: 'hex',
			ISO88591: 'iso-8859-1',
			ISO88592: 'iso-8859-2',
			UCS2: 'ucs2',
			UTF16LE: 'utf16le',
			UTF32: 'utf32',
			UTF8: 'utf8',
			Windows1252: 'windows-1252',
		})
	})

	it('should define all values for LanguageCode enum', () => {
		expect(LanguageCode).toMatchObject({
			Chinese: 'zh',
			English: 'en',
			French: 'fr',
			German: 'de',
			Hindi: 'hi',
			Spanish: 'es',
		})
	})

	it('should define all values for Status enum', () => {
		expect(Status).toMatchObject({
			Active: 'Active',
			Canceled: 'Canceled',
			Completed: 'Completed',
			Failed: 'Failed',
			Inactive: 'Inactive',
			Pending: 'Pending',
			Suspended: 'Suspended',
		})
	})

	it('should define all values for ResponseType enum', () => {
		expect(ResponseType).toMatchObject({
			ArrayBuffer: 'arraybuffer',
			Blob: 'blob',
			Document: 'document',
			FormData: 'formdata',
			Json: 'json',
			Stream: 'stream',
			Text: 'text',
		})
	})
})
