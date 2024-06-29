import React from 'react';
import styles from './ProtocolSelector.module.css';

function ProtocolSelector({ protocols, onSelect }) {
  return (
    <select className={styles.protocolSelector} onChange={(e) => onSelect(e.target.value)}>
      <option value="">Choose Protocol</option>
      {protocols.map((protocol, index) => (
        <option key={index} value={protocol.file}>
          {protocol.name}
        </option>
      ))}
    </select>
  );
}

export default ProtocolSelector;
