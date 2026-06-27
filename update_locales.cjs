const fs = require('fs');

const data = {
  zh: {
    actions: {
      inject_aura: '注入 Aura Agent',
      next_scenario: '下一个场景',
      enter_reactor: '进入反应堆'
    },
    nodes: {
      meeting: ['查阅多方日历', '邮件群发协调', '会议室冲突', '重新协调'],
      finance: ['手工填单', '科目错误打回', '重新贴发票'],
      hr: ['提IT工单', '等候邮箱分配', '手工加企微群'],
      data: ['导表 A', '导表 B', '导表 C', '手动 Excel 汇兑']
    }
  },
  en: {
    actions: {
      inject_aura: 'Inject Aura Agent',
      next_scenario: 'Next Scenario',
      enter_reactor: 'Enter Reactor'
    },
    nodes: {
      meeting: ['Check Calendars', 'Group Emails', 'Room Conflict', 'Re-coordinate'],
      finance: ['Manual Entry', 'Code Error', 'Re-attach'],
      hr: ['IT Ticket', 'Wait for Email', 'Manual Groups'],
      data: ['Export A', 'Export B', 'Export C', 'Manual Merge']
    }
  },
  ja: {
    actions: {
      inject_aura: 'Aura Agentを注入',
      next_scenario: '次のシナリオ',
      enter_reactor: 'リアクターへ'
    },
    nodes: {
      meeting: ['カレンダー確認', '一斉メール調整', '会議室の衝突', '再調整'],
      finance: ['手動入力', '科目エラー', '領収書再添付'],
      hr: ['ITチケット', 'メール待ち', '手動グループ追加'],
      data: ['データA出力', 'データB出力', 'データC出力', '手動マージ']
    }
  }
};

['zh', 'en', 'ja'].forEach(lang => {
  const file = `./src/locales/${lang}.json`;
  const content = JSON.parse(fs.readFileSync(file, 'utf8'));
  
  content.translation.actions = data[lang].actions;
  
  Object.keys(data[lang].nodes).forEach(scenarioKey => {
    data[lang].nodes[scenarioKey].forEach((nodeText, index) => {
      content.translation.scenarios[scenarioKey][`past_node${index + 1}`] = nodeText;
    });
  });

  fs.writeFileSync(file, JSON.stringify(content, null, 2));
});

console.log('Locales updated successfully');
