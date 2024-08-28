import { EnumDescriptionPipe } from "./enum-description.pipe";
import { BaseTypeEnum } from '../enums/base-type.enums';

describe('EnumDescriptionPipe', () => {
  let pipe: EnumDescriptionPipe;
  let mockTypes: BaseTypeEnum[];

  beforeEach(() => {
    pipe = new EnumDescriptionPipe();
    mockTypes = [
      { code: '1', name: 'Type One' },
      { code: '2', name: 'Type Two' },
      { code: '3', name: 'Type Three' }
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the correct name for a given code', () => {
    const result = pipe.transform('1', mockTypes);
    console.log('Test: should return the correct name for a given code');
    console.log('Input value: 1');
    console.log('Mock types:', mockTypes);
    console.log('Result:', result);
    expect(result).toBe('Type One');
  });

  it('should return null for an unknown code', () => {
    const result = pipe.transform('unknown', mockTypes);
    console.log('Test: should return null for an unknown code');
    console.log('Input value: unknown');
    console.log('Mock types:', mockTypes);
    console.log('Result:', result);
    expect(result).toBeNull();
  });

  it('should return null for an empty code', () => {
    const result = pipe.transform('', mockTypes);
    console.log('Test: should return null for an empty code');
    console.log('Input value: ""');
    console.log('Mock types:', mockTypes);
    console.log('Result:', result);
    expect(result).toBeNull();
  });

  it('should return null for a null code', () => {
    const result = pipe.transform(null, mockTypes);
    console.log('Test: should return null for a null code');
    console.log('Input value: null');
    console.log('Mock types:', mockTypes);
    console.log('Result:', result);
    expect(result).toBeNull();
  });

  it('should return null for a valid code with an empty list of items', () => {
    const result = pipe.transform('1', []);
    console.log('Test: should return null for a valid code with an empty list of items');
    console.log('Input value: 1');
    console.log('Mock types: []');
    console.log('Result:', result);
    expect(result).toBeNull();
  });
});
