import { getLevel } from '../level';
import fetchData from '../http';

jest.mock('../http');

beforeEach(() => {
    jest.resetAllMocks();
});

test('should return false', () => {
    fetchData.mockReturnValue({});
    expect(getLevel(1)).toEqual('Информация об уровне временно недоступна');
    expect(fetchData).toBeCalledWith('https://server/user/1');
    expect(fetchData).not.toBeCalledWith('https://server/user/2');
});

test('should level', () => {
    fetchData.mockReturnValue({ 'status': 'ok', 'level': 50 });
    expect(getLevel(1)).toEqual('Ваш текущий уровень: 50');
});

test('should to be called', () => {
    fetchData.mockReturnValue({});
    getLevel(1);
    expect(fetchData).toBeCalledWith('https://server/user/1');
    expect(fetchData).not.toBeCalledWith('https://server/user/2');
});



