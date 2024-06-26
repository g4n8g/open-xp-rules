{
  "action": "start",
  "object": "process",
  "status": "failure",
  "category.generic": "Process",
  "category.high": "Availability Management",
  "category.low": "Control",
  "chain_id": "11406459",
  "datafield1": "http",
  "datafield2": "root",
  "datafield3": "0755",
  "datafield4": "/usr/lib/apt/methods/http",
  "event_src.category": "Operating system",
  "event_src.ip": "10.10.188.221",
  "event_src.rule": "pt_siem_execve_daemon",
  "event_src.subsys": "auditd",
  "event_src.title": "unix_like",
  "id": "PT_UNIX_like_auditd_syslog_structured_syscall_process_start",
  "importance": "low",
  "labels": "node_contains_ext_ip",
  "msgid": "execve",
  "numfield2": 0,
  "object.account.group": "zabbix",
  "object.account.id": "109",
  "object.account.name": "zabbix",
  "object.process.cwd": "/",
  "object.process.fullpath": "/usr/lib/apt/methods/http",
  "object.process.id": "3012853",
  "object.process.name": "http",
  "object.process.parent.id": "1",
  "object.process.path": "/usr/lib/apt/methods/",
  "reason": "Bad address",
  "subject.account.id": "109",
  "subject.account.name": "zabbix",
  "subject.account.privileges": "109",
  "subject.account.session_id": "4294967295",
  "time": "2023-05-12T22:36:12.000Z"
}