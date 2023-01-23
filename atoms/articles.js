import { atom } from 'recoil';
export const articlesState = atom({
  key: 'articlesState',
  default: [
    {
      id: 1,
      title: 'Article 1',
      percentage: '81',
      expanded: false,
      paragraphs: [
        {
          id: '1',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '2',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        ,
        {
          id: '3',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'Article 1',
      percentage: '81',
      expanded: false,
      paragraphs: [
        {
          id: '4',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '5',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: 'Article 1',
      percentage: '81',
      expanded: false,
      paragraphs: [
        {
          id: '6',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '7',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '8',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '9',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '10',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '11',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '12',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '13',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '14',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '15',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '16',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '17',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '18',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '19',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '20',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '21',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '22',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '23',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '24',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '25',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '26',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '27',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '28',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '29',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '30',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '31',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '32',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '33',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '34',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
        {
          id: '35',
          title: 'Paragraph 1',

          content: [
            {
              indexes: [43, 45],
              chunkContent: [
                [
                  {
                    weight: 'font-semibold',
                    content: '제3조의2(투자신탁의 ',
                  },
                  {
                    weight: 'font-semibold',
                    replaced: '투자자',
                    replacement: '가입제한',
                    revised: false,
                  },
                  {
                    weight: 'font-semibold',
                    content: ') ',
                  },
                ],
                ,
                [
                  {
                    weight: '',
                    added: ' Addition Test ',
                    revised: false,
                  },
                  {
                    weight: '',
                    content: '이 투자신탁은',
                  },
                  {
                    weight: 'font-semibold',
                    content: '일반 사모집합',
                  },
                  {
                    weight: '',
                    missing: '투자기구로서',
                    revised: false,
                  },
                  {
                    weight: '',
                    content:
                      '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                  },
                ],
              ],
            },
          ],
        },
      ],
    },
  ],
  dangerouslyAllowMutability: true,
});

export const selectedArticleState = atom({
  key: 'selectedArticleState',
  default: {
    id: 1,
    title: 'Article 1',
    percentage: '81',
    expanded: false,
    paragraphs: [
      {
        id: '1',
        title: 'Paragraph 1',

        content: [
          {
            indexes: [43, 45],
            chunkContent: [
              [
                {
                  weight: 'font-semibold',
                  content: '제3조의2(투자신탁의 ',
                },
                {
                  weight: 'font-semibold',
                  replaced: '투자자',
                  replacement: '가입제한',
                  revised: false,
                },
                {
                  weight: 'font-semibold',
                  content: ') ',
                },
              ],
              ,
              [
                {
                  weight: '',
                  added: ' Addition Test ',
                  revised: false,
                },
                {
                  weight: '',
                  content: '이 투자신탁은',
                },
                {
                  weight: 'font-semibold',
                  content: '일반 사모집합',
                },
                {
                  weight: '',
                  missing: '투자기구로서',
                  revised: false,
                },
                {
                  weight: '',
                  content:
                    '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                },
              ],
            ],
          },
        ],
      },
      {
        id: '2',
        title: 'Paragraph 1',

        content: [
          {
            indexes: [43, 45],
            chunkContent: [
              [
                {
                  weight: 'font-semibold',
                  content: '제3조의2(투자신탁의 ',
                },
                {
                  weight: 'font-semibold',
                  replaced: '투자자',
                  replacement: '가입제한',
                  revised: false,
                },
                {
                  weight: 'font-semibold',
                  content: ') ',
                },
              ],
              ,
              [
                {
                  weight: '',
                  added: ' Addition Test ',
                  revised: false,
                },
                {
                  weight: '',
                  content: '이 투자신탁은',
                },
                {
                  weight: 'font-semibold',
                  content: '일반 사모집합',
                },
                {
                  weight: '',
                  missing: '투자기구로서',
                  revised: false,
                },
                {
                  weight: '',
                  content:
                    '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                },
              ],
            ],
          },
        ],
      },
      ,
      {
        id: '3',
        title: 'Paragraph 1',

        content: [
          {
            indexes: [43, 45],
            chunkContent: [
              [
                {
                  weight: 'font-semibold',
                  content: '제3조의2(투자신탁의 ',
                },
                {
                  weight: 'font-semibold',
                  replaced: '투자자',
                  replacement: '가입제한',
                  revised: false,
                },
                {
                  weight: 'font-semibold',
                  content: ') ',
                },
              ],
              ,
              [
                {
                  weight: '',
                  added: ' Addition Test ',
                  revised: false,
                },
                {
                  weight: '',
                  content: '이 투자신탁은',
                },
                {
                  weight: 'font-semibold',
                  content: '일반 사모집합',
                },
                {
                  weight: '',
                  missing: '투자기구로서',
                  revised: false,
                },
                {
                  weight: '',
                  content:
                    '가입자격은 다음 각호의 어느 하나에 해당하는 투자자("적격투자자"라 한다)',
                },
              ],
            ],
          },
        ],
      },
    ],
  },
  dangerouslyAllowMutability: true,
});
