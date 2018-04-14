// Jungle Testnet Node
default_config = {
    api_port: 8878,
    control_port: 8001,
    admin_user: 'admin',
    admin_pass: 'password',
    binary_path: '/opt/eos/dawn-v3.0.0/programs/nodeos',
    nodeos_http_port: 8881,
    data_path: '/var/opt/eos/jungle',
    config_path: '/etc/eos/jungle',
    log_dir: '/var/log/eos',
    enable_stale_prod: false,
	log_name: 'jungle_error.log'
};

module.exports = {
    default_config
};