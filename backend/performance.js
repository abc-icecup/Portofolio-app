import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  scenarios: {
    
    load_test: {
      executor: 'constant-vus',
      vus: 50,
      duration: '1m',
      exec: 'runTest',
    },
    
    stress_test: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 50 },  
        { duration: '30s', target: 200 }, 
        { duration: '30s', target: 0 },   
      ],
      exec: 'runTest',
      startTime: '1m5s', 
    },
  },
};

export function runTest() {
  const res = http.get('http://localhost:5000/');
  
  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}