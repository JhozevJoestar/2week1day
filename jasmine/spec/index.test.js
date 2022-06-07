describe('Все задачи', () => {
  it('initials', () => {
    expect(initials('Ахмад', 'Кудузов', 'Якубович')).toBe('Кудузов А.Я.');
  });

  it('sum', () => {
    expect(sum([1, 3, 6, 11, 98, 7, 1])).toBe(23);
    expect(sum([1, 1, 1])).toBe(3);
    expect(sum([2, 2, 2])).toBe(0);
  });

  it('hasEqualSums', () => {
    expect(hasEqualSums([11, 22], [1, 20, 10, 1, 1])).toBe(true);
    expect(hasEqualSums([4, 4], [3, 6])).toBe(false);
    expect(hasEqualSums([2, 4], [4, 2])).toBe(true);
    expect(hasEqualSums([0, 0, 0], [1])).toBe(false);
  });

  it('repeatsXTimes', () => {
    expect(repeatsXTimes([1, 5, 1, 3, 1], 1, 3)).toBe(true);
    expect(repeatsXTimes([4, 1, 3, 3, 8], 3, 4)).toBe(false);
    expect(repeatsXTimes([1, 2, 1, 2, 4], 2, 2)).toBe(true);
  });

  it('filterNames', () => {
    expect(filterNames(['into', 'code', 'js', 'html', 'git'], 4)).toEqual([
      'into',
      'code',
      'html',
    ]);
  });

  it('searchWord', () => {
    expect(searchWord(['js', 'css', 'php'], 'я изучаю css')).toBe(true);
    expect(searchWord(['js', 'css', 'php'], 'intocode изменил мою жизнь')).toBe(
      false
    );
    expect(searchWord(['js', 'css', 'php'], 'я изучаю css и js')).toBe(true);
  });

  it('opposition', () => {
    expect(opposition([1, -4, 61, -114, 5])).toEqual([-114, 61]);
  });

  it('cutText', () => {
    expect(cutText('Всё в мире подорожало', 5)).toBe('Всё в мире подорожало');

    expect(cutText('Программа работает не так, как надо', 2)).toBe(
      'Программа работает...'
    );
  });
});
