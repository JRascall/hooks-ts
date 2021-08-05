import IHooks from "../src/ihooks";
import WeightHooks from "../src/weightedHooks"; 

describe('hooks', () => {

    const hooks: IHooks = new WeightHooks(true, true);

    it("returns amount of hooks called", () => {
        let results: number = hooks.call('test', null);
        expect(results).toBe(0);

        hooks.register('test', () => {

        }, 0);

        results = hooks.call('test', null);
        expect(results).toBe(1);
    });

    it("valid hook", () => {
        let results: number = 0;
        hooks.register('test', () => {
            results = 10; 
        }, 0);

        hooks.call('test', null);
        expect(results).toBe(10);
    });

    it("doesn't call other hooks", () =>{
        let results: number = 0;
        hooks.register('test', () => {
            results = 10; 
        }, 0);

        hooks.register('testing', () => {
            results = 100; 
        }, 1);

        hooks.call('test', null);
        expect(results).toBe(10);
    });

    it("doesn't care about case",() => {
        let results: number = 0;
        hooks.register('TEST', () => {
            results = 10; 
        }, 0);
        hooks.call('test', null);
        expect(results).toBe(10);

        hooks.register('test2', () => {
            results = 20; 
        }, 0);
        hooks.call('TEST2', null);
        expect(results).toBe(20);
    });

    it("weight", () => {
        let results: number = 0;
        hooks.register('test', () => {
            expect(results).toBe(100);
            results = 10; 
        }, 0);

        hooks.register('test', () => {
            results = 100; 
        }, 1);

        hooks.call('test', null);
        expect(results).toBe(10);
    });
});