import { test, expect } from '@playwright/test';
import 'dotenv/config';
import fs from 'fs'
import path from 'path'
import { allure } from 'allure-playwright';

test.describe('API Testing', async () => {

      test('TC-API-001 GET return Rick and Morty API', async ({ request }) => {

        const response = await request.get(
          'https://rickandmortyapi.com/api/'
        );
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log('URL:', response.url());
        console.log('Status:', response.status());
        console.log('OK:', response.ok());
        const headers = response.headers();
        console.log(headers)
        const body = await response.json();
        console.log(body)
      });

      test('TC-API-002 GET /api/users returns paginated users', async ({ request }) => {
        const response = await request.get(
        'https://reqres.in/api/users?page=2', 
          {
            headers: {
              'x-api-key': process.env.REQRES_API_KEY || '',
            },
          }
        );
        //console.log('API Key:', process.env.REQRES_API_KEY);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.data).toBeTruthy();
        expect(body.data.length).toBeGreaterThan(0);
        expect(body.page).toBe(2);
        console.log(body)
      });

      test('TC-API-003 POST /api/users creates a user', async ({ request }, testInfo) => {
        const jsonPath = path.join(process.cwd(), 'data', 'create-user.json');
        const payload = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
        const response = await request.post(
          'https://reqres.in/api/users', 
          {
            headers: {
              'x-api-key': process.env.REQRES_API_KEY || '',
              },
          data: payload
        });

        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.name).toBe('QA Engineer');
        expect(body.id).toBeTruthy();

        await testInfo.attach('Response', {
          body: JSON.stringify(body, null, 2),
          contentType: 'application/json'
        });

      });

})